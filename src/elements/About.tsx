import type { FC, PropsWithChildren } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ContentWrapper } from "@/components/helpers/ContentWrapper";
import { SectionTitle } from "@/components/helpers/SectionTitle";

type ProfileCardProps = {
  personName: string;
  personTitle: string;
  imgSrc: string;
} & PropsWithChildren;

/**
 * Description should aim for ~250 chars
 */
const ProfileCard: FC<ProfileCardProps> = ({
  personName,
  personTitle,
  imgSrc,
  children,
}) => {
  // Assuming name is space-separated string: take first letter from each
  const initials = personName
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <Card className="grid grid-cols-2 gap-8">
      <CardHeader className="flex flex-1 flex-col items-center">
        <Avatar className="flex size-fit">
          <AvatarImage
            className="size-28"
            src={imgSrc}
            loading="lazy"
            alt={personName}
          />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <CardTitle>{personName}</CardTitle>
        <CardDescription>{personTitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">{children}</CardContent>
    </Card>
  );
};

const JimCard: FC = () => {
  return (
    <ProfileCard
      personName="Jim Knudstrup"
      personTitle="CEO"
      imgSrc="/images/jim.jpeg"
    >
      Jim is a visionary leader with a background in the U.S. Army. His
      strategic thinking and dedication drive the company's mission to deliver
      top-tier software solutions, ensuring every project aligns with client
      goals and maintains the highest standards of excellence.
    </ProfileCard>
  );
};

const MikeCard = () => {
  return (
    <ProfileCard
      personName="Michael Smith"
      personTitle="CTO"
      imgSrc="/images/mike.jpeg"
    >
      Mike brings decades of comprehensive technical expertise to our mission.
      Evolving from his early career as an Electronics Technician in the U.S.
      Army, where he honed meticulous problem-solving skills and held a secret
      security clearance, Mike transitioned into a highly proficient full-stack
      engineer. His experience spans critical sectors, from the U.S. Army to
      leading e-commerce and specialized cybersecurity firms. A true engineer's
      engineer, Mike delivers robust, high-quality solutions across the advanced
      technologies we champion, ensuring performant and secure digital services.
    </ProfileCard>
  );
};

export const About: FC = () => {
  return (
    <div>
      <ContentWrapper>
        <SectionTitle>Who We Are</SectionTitle>
        <div className="grid grid-cols-2 gap-8">
          <JimCard />
          <MikeCard />
        </div>
      </ContentWrapper>
    </div>
  );
};
