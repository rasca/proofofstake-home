import { CategorySubmission, CategoryTheme } from "@/components/category-grid";
import {
  steakCategory,
  mateCategory,
  veggiesCategory,
  gauchoCategory,
  futbolCategory,
  easterEggsCategory,
} from "./category-data";

export interface SubmissionWithCategory {
  submission: CategorySubmission;
  theme: CategoryTheme;
  categoryTitle: string;
}

const allCategories = [
  steakCategory,
  mateCategory,
  veggiesCategory,
  gauchoCategory,
  futbolCategory,
  easterEggsCategory,
];

export function findSubmissionById(id: number): SubmissionWithCategory | null {
  for (const category of allCategories) {
    const submission = category.submissions.find((s) => s.id === id);
    if (submission) {
      return {
        submission,
        theme: category.theme,
        categoryTitle: category.theme.title,
      };
    }
  }
  return null;
}
