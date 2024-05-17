import React from "react";
import { Link } from "react-router-dom";
import { ListPagination, routes } from "@/core";
import { CharEntity } from "./rm-list.vm";
import { Card, CardContent, CardMedia } from "@mui/material";
import "./rm-list.styles.css";
import { useDebounce } from "use-debounce";
import { setColor } from "../rm-detail/components/rm-detail-color";
import { getCharList } from "./rm-list.api";
import { RmContext } from "@/core/providers/rm.context";
import { RmSearch } from "./rm-list.search";

export const RmList: React.FC = () => {
  const { page, setPage, filter } = React.useContext(RmContext);
  const [char, setChar] = React.useState<CharEntity[]>([]);
  const [debouncedFilter] = useDebounce(filter, 500);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  React.useEffect(() => {
    getCharList(page, filter).then(({ char, totalPages }) => {
      setChar(char);
      setTotalPages(totalPages);
    });
  }, [debouncedFilter, page]);

  const handleChangePage = (value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className="rm-body">
        <div className="rm-content">
          <h1>Rick and Morty</h1>
          <RmSearch />
          <div className="rm-list">
            {char.length === 0 ? (
              <p>There is no character with this name. Please check the name</p>
            ) : (
              char.map(char => (
                <React.Fragment key={char.id}>
                  <Card className="rm-card">
                    <CardMedia
                      component="img"
                      alt={`Profil image of ${char.name}`}
                      height="150px"
                      image={char.image}
                    />
                    {setColor(char)}
                    <CardContent>
                      <h3>
                        <Link
                          className="rm-link"
                          to={routes.rmDetail(char.id)}
                        >
                          {char.name}
                        </Link>
                      </h3>
                      <span className="rm-text">
                        {char.species}
                        <br />
                        <span style={{ fontWeight: "lighter" }}>{char.location.name}</span>
                      </span>
                    </CardContent>
                  </Card>
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
