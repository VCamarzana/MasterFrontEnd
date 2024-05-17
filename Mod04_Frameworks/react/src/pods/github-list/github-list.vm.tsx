export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export interface GithubPageEntity {
  members: MemberEntity[];
  totalPages: number;
}
