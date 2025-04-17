// app/workflows/page.tsx
import { GetWorkflowsForUser } from '@/actions/workflows/getWorkflowsForUser';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, InboxIcon } from 'lucide-react';
import CreateWorkflowDialog from './_components/CreateWorkflowDialog';
import WorkflowCard from './_components/WorkflowCard';

export default async function Page() {
  const workflows = await GetWorkflowsForUser();

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-muted-foreground">Manage your workflows</p>
        </div>
        <CreateWorkflowDialog />
      </div>
      <div className="h-full py-6">
        {workflows?.length === 0 ? (
          <div className="flex flex-col gap-4 h-full items-center justify-center">
            <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
              <InboxIcon size={40} className="stroke-primary" />
            </div>
            <div className="flex flex-col gap-1 text-center">
              <p className="font-bold">No workflow created yet</p>
              <p className="text-sm text-muted-foreground">
                Click the button below to create your first workflow.
              </p>
            </div>
            <CreateWorkflowDialog triggerText="Create your first workflow" />
          </div>
        ) : workflows ? (
          <div className="grid grid-cols-1 gap-4">
            {workflows.map((wf) => (
              <WorkflowCard key={wf.id} workflow={wf} />
            ))}
          </div>
        ) : (
          <Alert variant="destructive">
            <AlertCircle className="w-4 h-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again later.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
