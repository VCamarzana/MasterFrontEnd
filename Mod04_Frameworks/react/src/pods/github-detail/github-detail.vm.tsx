export interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
  html_url: string;
  avatar_url: string;
}

export const createDefaultMemberDetail = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
  type: "",
  html_url: "",
  avatar_url: "",
});
