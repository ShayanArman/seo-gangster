import WorkflowLandingPage from "@/components/WorkflowLandingPage";
import { workflowPages } from "@/lib/workflowPages";

export default function SchemaAuditWorkflowPage() {
  return <WorkflowLandingPage {...workflowPages["/workflows/workflow/schema-audit"]} />;
}
