export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "our classes",
  ContactUs = "contact us",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface OurClassType {
  name: string;
  description?: string;
  image: string;
}
