import { routes } from "@/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { createDefaultMemberDetail, MemberDetailEntity } from "./github-detail.vm";
import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import "./github-detail.styles.css";
import { getMemberDetail } from "./github-detail.api";

export const GithubDetail: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(createDefaultMemberDetail());
  const { id } = useParams();

  React.useEffect(() => {
    getMemberDetail(id).then(json => setMember(json));
  }, []);

  return (
    <>
      <div className="github-body">
        <div className="github-detail-content">
          <Card>
            <div className="github-card">
              <CardMedia
                className="github-detail-img"
                component="img"
                image={member.avatar_url}
                alt={`${member.login}´s avatar`}
              />
              <CardContent>
                <CardActions className="github-detail-button">
                  <Button variant="outlined">
                    <Link
                      className="github-detail-link"
                      to={member.html_url}
                    >
                      Github Profile
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link
                      className="github-detail-link"
                      to={routes.githubList}
                    >
                      Close
                    </Link>
                  </Button>
                </CardActions>
                <div className="github-card-content">
                  <h2> {member.name}</h2>
                  <p>
                    ID: <span>{member.id}</span>
                  </p>
                  <p>
                    login: <span>{member.login}</span>
                  </p>
                  <p>
                    Company: <span>{member.company}</span>
                  </p>
                  <p>
                    Bio: <span>{member.bio}</span>
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
