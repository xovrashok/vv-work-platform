import { mockFetch } from "./mockFetch";
import {
  MOCK_PARTNERS,
  MOCK_JOBS,
  MOCK_CATEGORIES,
  MOCK_EMPLOYERS,
} from "../data/mockData";
import type { Partner, Job, Category, Candidate } from "../types/api";

export const getPartners = (): Promise<Partner[]> => {
  return mockFetch(MOCK_PARTNERS);
};

export const getCandidate = (): Promise<Candidate[]> => {
  return mockFetch(MOCK_EMPLOYERS);
};

export const getPartnerBySlug = (
  slug: string,
): Promise<Partner | undefined> => {
  const partner = MOCK_PARTNERS.find((p) => p.slug === slug);
  return mockFetch(partner);
};

export const getJobsByPartner = (partnerId: number): Promise<Job[]> => {
  const jobs = MOCK_JOBS.filter((j) => j.partnerId === partnerId);
  return mockFetch(jobs);
};

export const getCategories = (): Promise<Category[]> => {
  return mockFetch(MOCK_CATEGORIES);
};

export const getJobs = (): Promise<Job[]> => {
  return mockFetch(MOCK_JOBS);
};
