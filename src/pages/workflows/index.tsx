import WorkflowLandingPage from "@/components/WorkflowLandingPage";
import { workflowPages } from "@/lib/workflowPages";

export default function WorkflowsPage() {
  return <WorkflowLandingPage {...workflowPages["/workflows"]} />;
}
