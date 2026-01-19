import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string): string {
  return dateString;
}

export function getStatusBadge(status: string): { text: string; className: string } {
  switch (status) {
    case "completed":
      return { text: "Completed", className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" };
    case "in-progress":
      return { text: "In Progress", className: "bg-copper-100 text-copper-800 dark:bg-copper-900/30 dark:text-copper-400" };
    default:
      return { text: status, className: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400" };
  }
}
