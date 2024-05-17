import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./github-list.vm";
import { ListPagination, routes } from "@/core";
import { getMemberList } from "./github-list.api";
import "./github-list.styles.css";
import { OrgContext } from "@/core/providers/github.context";
import { GithubSearch } from "./github-list.search";

export const GithubList: React.FC = () => {
  const { org, page, setPage, filter } = React.useContext(OrgContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  React.useEffect(() => {
    getMemberList(filter, page).then(({ members, totalPages }) => {
      setMembers(members);
      setTotalPages(totalPages);
    });
  }, [org, filter, page]);

  const handleChangePage = (value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className="github-body">
        <div>
          <h2>Search for company members on Github</h2>
          <GithubSearch />
          <p>Members of {filter}:</p>
          <div className="github-header">
            <span className="header">AVATAR</span>
            <span className="header">ID</span>
            <span className="header">NAME</span>
          </div>
          <div className="github-container">
            {!members.length ? (
              <span className="error"> We hit an error, unable to access {filter} company.</span>
            ) : (
              members.map(member => (
                <React.Fragment key={member.id}>
                  <img
                    src={member.avatar_url}
                    alt={`${member.login}´s avatar`}
                  />

                  <span className="row">{member.id}</span>
                  <Link
                    className="github-link"
                    to={routes.githubDetail(member.login)}
                  >
                    {member.login}
                  </Link>
                </React.Fragment>
              ))
            )}
          </div>
          <ListPagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handleChangePage}
          ></ListPagination>
        </div>
      </div>
    </>
  );
};
