import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

export interface LogoProps extends React.ComponentPropsWithoutRef<"svg"> {
  /**
   * Optional theme override. By default, it follows the system/parent dark mode class.
   */
  theme?: "light" | "dark"
}

export function Logo({ className, theme, ...props }: LogoProps) {
  const uniqueId = React.useId()
  const gradAId = `logo-grad-a-${uniqueId}`
  const gradBId = `logo-grad-b-${uniqueId}`

  // If theme override is provided, we can force the dark or light styles using a local class
  const themeClass = theme === "dark" ? "dark" : theme === "light" ? "light" : ""

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="316.342 316.577 391.511 391.511"
      className={cn("w-full h-full select-none", themeClass, className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={gradAId}
          x1="472.412"
          x2="702.752"
          y1="466.356"
          y2="422.762"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            className="[stop-color:#fba240] dark:[stop-color:#fb923c] transition-all duration-300"
          />
          <stop
            offset="1"
            className="[stop-color:#fec459] dark:[stop-color:#fde047] transition-all duration-300"
          />
        </linearGradient>

        <linearGradient
          id={gradBId}
          x1="350.129"
          x2="537.056"
          y1="628.807"
          y2="711.274"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            className="[stop-color:#f07c29] dark:[stop-color:#f97316] transition-all duration-300"
          />
          <stop
            offset="1"
            className="[stop-color:#fda642] dark:[stop-color:#fdba74] transition-all duration-300"
          />
        </linearGradient>
      </defs>

      {/* Path 1: Base shape background */}
      <path
        className="fill-[#e57e15] dark:fill-[#ea580c] transition-colors duration-300"
        d="M453.978 377.872a103.8 103.8 0 0 1 60.942-51.146c16.756-5.227 24.205-4.061 40.71-4.355 30.198-.537 51.491.615 78.952 15.209a137.64 137.64 0 0 1 67.833 81.933 128.04 128.04 0 0 1-9.784 97.47c-10.741 20.068-25.491 35.944-45.083 47.388-2.075 1.213-4.653 2.354-6.56 3.586l-.346.271c-3.213 33.887-35.724 66.235-69.427 70.12l-.451.101c-13.129 26.91-38.57 47.067-66.611 56.811a122.8 122.8 0 0 1-31.922 6.467c-12.876.959-153.394.856-155.657-.143l-.232-.492c.408-15.817.141-32.748.143-48.651l.017-81.571-.052-33.674c-.006-6.286-.263-15.372.504-21.336a72.3 72.3 0 0 1 8.523-25.537c12.153-21.848 33.845-34.807 57.262-41.611l.236-.494a93.1 93.1 0 0 1 10.905-27.435c13.969-23.669 33.052-35.375 59.092-42.204zm-9.341 66.468-.129 135.644c24.809-1.696 58.56 2.869 82.651-3.262a99.3 99.3 0 0 0 17.419-6.76c18.328-9.328 28.369-22.77 34.575-41.865 1.745-6.61 2.033-12.73 1.462-19.542a66.69 66.69 0 0 0-23.905-45.911c-27.855-23.348-59.416-18.502-92.696-18.685-6.14-.034-13.005-.234-19.075.293z"
      />

      {/* Path 2: Top-right curve overlay with Gradient A */}
      <path
        fill={`url(#${gradAId})`}
        d="M453.978 377.872a103.8 103.8 0 0 1 60.942-51.146c16.756-5.227 24.205-4.061 40.71-4.355 30.198-.537 51.491.615 78.952 15.209a137.64 137.64 0 0 1 67.833 81.933 128.04 128.04 0 0 1-9.784 97.47c-10.741 20.068-25.491 35.944-45.083 47.388-2.075 1.213-4.653 2.354-6.56 3.586-.041-4.888.992-11.401 1.207-16.499.277-6.568.293-12.969.302-19.538q-.015-14.713-.299-29.424c-.096-6.932.047-15.839-1.031-22.608-4.078-25.602-19.33-50.453-37.45-68.487-16.496-16.417-38.679-30.336-62.107-33.159-9.972-1.201-20.985-.778-31.093-.78l-56.128.414z"
      />

      {/* Path 3: Bottom-left curve shadow */}
      <path
        className="fill-[#c55501] dark:fill-[#ea580c] transition-colors duration-300"
        d="M316.342 701.092c.408-15.817.141-32.748.143-48.651l.017-81.571-.052-33.674c-.006-6.286-.263-15.372.504-21.336a72.3 72.3 0 0 1 8.523-25.537c12.153-21.848 33.845-34.807 57.262-41.611-.541 6.851-1.89 15.302-2.113 21.788-.446 12.972-.26 26.584-.254 39.604l.019 68.223-.395 42.213c-.031 5.954-.294 15.506.207 21.154-1.738 2.214-19.591 17.774-23.114 21.061a3049 3049 0 0 0-26.271 25.094c-3.531 3.382-10.76 10.633-14.476 13.243"
      />

      {/* Path 4: Bottom-right curve with Gradient B */}
      <path
        fill={`url(#${gradBId})`}
        d="M380.203 641.694c5.171-2.112 72.714-.349 84.797-.723 35.035-1.085 70.465 1.733 105.764-2.522-13.129 26.91-38.57 47.067-66.611 56.811a122.8 122.8 0 0 1-31.922 6.467c-12.876.959-153.394.856-155.657-.143l-.232-.492c3.716-2.61 10.945-9.861 14.476-13.243a3049 3049 0 0 1 26.271-25.094c3.523-3.287 21.376-18.847 23.114-21.061"
      />

      {/* Path 5: Top-left shadow */}
      <path
        className="fill-[#c55501] dark:fill-[#ea580c] transition-colors duration-300"
        d="M382.975 448.218a93.1 93.1 0 0 1 10.905-27.435c13.969-23.669 33.052-35.375 59.092-42.204-1.8 5.914-5.046 15.559-6.107 21.229-2.548 13.609-1.929 30.361-1.926 44.444l-.302.088c-6.276-1.262-34.358-.213-41.734.604-4.7.52-14.407 2.766-19.928 3.274"
      />

      {/* Path 6: Highlight shape */}
      <path
        className="fill-[#fcae4c] dark:fill-[#fdba74] transition-colors duration-300"
        d="M581.74 579.956c26.289.478 35.294-1.832 58.902-11.728-3.213 33.887-35.724 66.235-69.427 70.12.167-1.951 5.256-15.314 6.189-18.961 3.639-14.229 3.954-25.058 4.336-39.431"
      />

      {/* Path 7: inner bottom-right shadow */}
      <path
        className="fill-[#c55501] dark:fill-[#ea580c] transition-colors duration-300"
        d="m579.153 528.097 1.491.666c1.484 3.986.86 42.998.876 50.748-8.17.008-50.016.958-54.361-2.789a99.3 99.3 0 0 0 17.419-6.76c18.328-9.328 28.369-22.77 34.575-41.865"
      />
    </svg>
  )
}
