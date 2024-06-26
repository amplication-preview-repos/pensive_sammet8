import { AboutPage as TAboutPage } from "../api/aboutPage/AboutPage";

export const ABOUTPAGE_TITLE_FIELD = "id";

export const AboutPageTitle = (record: TAboutPage): string => {
  return record.id?.toString() || String(record.id);
};
