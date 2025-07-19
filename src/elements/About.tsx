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
  const initials = personName
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <Card className="flex">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="flex size-fit">
          <AvatarImage
            className="size-32"
            src={imgSrc}
            loading="lazy"
            alt={personName}
          />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <CardTitle>{personName}</CardTitle>
        <CardDescription>{personTitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-6">{children}</CardContent>
    </Card>
  );
};

const JimCard: FC = () => {
  return (
    <ProfileCard
      personName="Jim Knudstrup"
      personTitle="Cofounder, Managing Partner"
      imgSrc="/images/jim.jpeg"
    >
      Jim draws from a broad range of skills and experiences, ranging from his
      work as a cryptolinguist for U.S. Army Intelligence, to his studies in
      Artificial Intelligence at Berkeley, to his engineering work in Silicon
      Valley. He has built sophisticated applications for some of the biggest
      names in tech.
    </ProfileCard>
  );
};

const MikeCard = () => {
  return (
    <ProfileCard
      personName="Michael Smith"
      personTitle="Cofounder, Founding Engineer"
      imgSrc="/images/mike.jpeg"
    >
      Mike brings decades of technical expertise to our mission, from his early
      career as an Electronics Technician in the U.S. Army, to his current work
      as a highly proficient full-stack engineer. He's delivered robust,
      high-quality software for finance, e-commerce, and specialized
      cybersecurity firms.
    </ProfileCard>
  );
};

export const About: FC = () => {
  return (
    <div className="from-primary to-secondary bg-linear-to-r from-50% py-4">
      <ContentWrapper>
        <SectionTitle textColor="light">Who We Are</SectionTitle>
        <div className="flex justify-center">
          <div className="text-2xl text-white">
            Our leadership team unites a diverse network of talent in the spirit
            of public service.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 py-8">
          <JimCard />
          <MikeCard />
        </div>
      </ContentWrapper>
    </div>
  );
};
