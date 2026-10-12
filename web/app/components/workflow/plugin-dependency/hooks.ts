import { useCallback } from 'react'
import { useCheckPipelineDependencies } from '@/service/use-pipeline'
import { useMutationCheckDependencies } from '@/service/use-plugins'
import { useStore as usePluginDependenciesStore } from './store'
import { ensureNonEmptyString } from '../../../../../sdks/nodejs-client/src/client/validation'

export const usePluginDependencies = () => {
  const { mutateAsync: checkWorkflowDependencies } = useMutationCheckDependencies()
  const { mutateAsync: checkPipelineDependencies } = useCheckPipelineDependencies()

  const handleCheckPluginDependencies = useCallback(
    async (id: string, isPipeline = false) => {
      ensureNonEmptyString(id, 'id')
      const checkDependencies = isPipeline ? checkPipelineDependencies : checkWorkflowDependencies
      const { leaked_dependencies } = await checkDependencies(id)
      const { setDependencies } = usePluginDependenciesStore.getState()
      setDependencies(leaked_dependencies)
    },
    [checkWorkflowDependencies, checkPipelineDependencies],
  )

  return {
    handleCheckPluginDependencies,
  }
}
