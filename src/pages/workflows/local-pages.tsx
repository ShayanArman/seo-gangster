import WorkflowLandingPage from "@/components/WorkflowLandingPage";
import { workflowPages } from "@/lib/workflowPages";

export default function LocalPagesWorkflowPage() {
  return <WorkflowLandingPage {...workflowPages["/workflows/local-pages"]} />;
}
