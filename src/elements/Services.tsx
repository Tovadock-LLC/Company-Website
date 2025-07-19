import {
  type FC,
  type PropsWithChildren,
  type SVGElementType,
  type ReactElement,
  useEffect,
  useRef,
} from "react";
import { clsx } from "clsx";
import { type Scope, createScope, animate, onScroll } from "animejs";

import { ContentWrapper } from "@/components/helpers/ContentWrapper";
import { SectionTitle } from "@/components/helpers/SectionTitle";

import {
  WebdevIcon,
  AccessibilityIcon,
  MigrationIcon,
  ChartIcon,
  DevicesIcon,
} from "@/images/icons";

type ServiceCardProps = {
  bg: "light" | "dark";
  title: string;
  serviceSvg: ReactElement<SVGElementType>;
} & PropsWithChildren;

const ServiceCard: FC<ServiceCardProps> = ({
  children,
  bg,
  serviceSvg,
  title,
}) => {
  const bgClass =
    bg === "light"
      ? clsx`bg-white`
      : clsx`bg-linear-to-r from-indigo-100 via-gray-100 to-rose-100
      hover:from-indigo-200 hover:via-gray-100 hover:to-rose-200`;

  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate("._service", {
        opacity: [{ from: 0, to: 1 }],
        y: [{ from: "3rem", to: "0rem" }],
        duration: 500,
        autoplay: onScroll({}),
      });
    });

    return () => scopeRef.current?.revert();
  }, []);

  return (
    <div className={`w-full`} ref={rootRef}>
      <div className="_scroll-container">
        <div className={`${bgClass} _service transition-colors`}>
          <ContentWrapper>
            <div className="flex items-center gap-x-8">
              <div
                id="svg-container"
                className="flex w-48 shrink-0 justify-center"
              >
                {serviceSvg}
              </div>
              <div id="copy-container">
                <h2 className="text-primary pb-2 text-2xl font-bold">
                  {title}
                </h2>
                <div className="text-xl">{children}</div>
              </div>
            </div>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
};

export const Services: FC = () => {
  return (
    <div className="py-8">
      <SectionTitle>What We Offer</SectionTitle>
      <div className="flex flex-col gap-y-8">
        <ServiceCard
          title="Custom Web Application Development"
          bg="dark"
          serviceSvg={
            <WebdevIcon className="fill-primary stroke-primary size-48" />
          }
        >
          We build powerful, tailor-made web applications that transform how
          your agency operates and delivers services. From intricate data
          portals to mission-critical internal systems, we design and develop
          robust solutions that scale with your needs and integrate seamlessly
          with existing infrastructure. Our focus is on delivering secure,
          high-performance applications that meet your unique operational
          demands.
        </ServiceCard>
        <ServiceCard
          title="Cross-Platform Desktop & Mobile Solutions"
          bg="light"
          serviceSvg={<DevicesIcon className="fill-primary size-48" />}
        >
          We extend your digital reach beyond the web, delivering seamless and
          powerful applications across desktop and mobile environments. Whether
          your team needs robust internal tools for specialized tasks or
          user-facing mobile apps, we'll build solutions for any device. Our
          cross-platform approach ensures consistency, reduces development
          overhead, and maximizes user engagement.
        </ServiceCard>
        <ServiceCard
          title="User-Centered Design & Section 508 Accessibility"
          bg="dark"
          serviceSvg={<AccessibilityIcon className="fill-primary size-48" />}
        >
          We believe that government digital services should be intuitive and
          accessible to everyone. Our team specializes in human-centered design
          methodologies, ensuring that every interface is not just visually
          appealing but also easy to use for all users and employees. We
          rigorously apply Section 508 compliance standards from conception
          through development, guaranteeing inclusive experiences that meet
          federal mandates.
        </ServiceCard>
        <ServiceCard
          title="Secure Cloud Migration & Legacy System Modernization"
          bg="light"
          serviceSvg={<MigrationIcon className="fill-primary size-40" />}
        >
          We guide your agency through the complex process of modernizing
          outdated systems and securely migrating them to the cloud. Our
          expertise ensures a smooth transition, reducing operational costs,
          enhancing scalability, and fortifying your digital infrastructure
          against evolving threats. We transform legacy challenges into
          opportunities for increased efficiency and resilience, safeguarding
          your data every step of the way.
        </ServiceCard>
        <ServiceCard
          title="AI/ML, Data Science & Advanced Analytics"
          bg="dark"
          serviceSvg={<ChartIcon className="stroke-primary size-48" />}
        >
          We empower government agencies to unlock the true potential of their
          data. Our team develops intelligent AI and Machine Learning solutions
          that automate processes, uncover critical insights, and support
          data-driven decision-making. From predictive analytics to advanced
          data visualization, we help you leverage your information assets to
          improve efficiency and mission outcomes.
        </ServiceCard>
      </div>
    </div>
  );
};
