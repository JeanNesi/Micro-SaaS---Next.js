import {
  Page,
  PageHeader,
  PageHeaderTitle,
  PageMain,
} from '@/components/dashboard/page'

export default function AppPage() {
  return (
    <Page>
      <PageHeader>
        <PageHeaderTitle>Tarefas</PageHeaderTitle>
      </PageHeader>
      <PageMain>
        <h1>Tarefa</h1>
      </PageMain>
    </Page>
  )
}
