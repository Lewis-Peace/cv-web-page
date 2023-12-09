export interface IProject {
  name: string,
  desc: string,
  img: string,
  latestRelease?: string,
  redirection?: string,
  ongoing?: boolean,
  dismissed?: boolean
}
