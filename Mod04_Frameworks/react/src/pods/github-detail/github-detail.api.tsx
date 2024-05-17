import { MemberDetailEntity } from "./github-detail.vm";

export const getMemberDetail = (id: string): Promise<MemberDetailEntity> =>
  fetch(`https://api.github.com/users/${id}`).then(response => response.json());
