import { GithubPageEntity, MemberEntity } from "./github-list.vm";

export const getMemberList = async (org: string, page: number): Promise<GithubPageEntity> => {
  try {
    const response = await fetch(`https://api.github.com/orgs/${org}/members?page=${page}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const linkHeader = response.headers.get("Link");
    const match = linkHeader ? linkHeader.match(/page=(\d+)>; rel="last"/) : null;
    const totalPages = match ? parseInt(match[1]) : page;

    const data = await response.json();
    return {
      members: data as MemberEntity[],
      totalPages: totalPages,
    };
  } catch (error) {
    return { members: [], totalPages: 0 };
  }
};
