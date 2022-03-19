export interface IApplication {
  id: number
  jobTitle: string
  status: string
  resumeId: number
  candidateInfo: ICandidate
}

interface ICandidate {
  id: number
  name: string
  phone: string
  skills?: string[]
}
