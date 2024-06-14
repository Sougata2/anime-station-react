import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { servers_map } from "../../helper/servers";

import useServers from "../../features/Episodes/useServers";
import useEpisode from "../../features/Episodes/useEpisode";
import Spinner from "../Spinner";

const StyledServers = styled.div`
  font-family: "Poetsen One", sans-serif;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
`;
const Category = styled.div``;
const ServerList = styled.div`
  display: flex;
  gap: 10px;
  & button {
  }
`;

const Btn = styled.button`
  cursor: pointer;
  padding: 0 9px 3px 9px;
  border-radius: 20px;
  font-family: inherit;
  ${({ $isactive }) => {
    console.log($isactive);
    return $isactive
      ? css`
          background-color: #e384ff;
          color: white;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        `
      : "";
  }}
  border: none;
`;

function Servers() {
  const [searchParam, setSearchParam] = useSearchParams();
  const epId = searchParam.get("epId");
  const activeServer = searchParam.get("server");
  const activeCategory = searchParam.get("category");
  console.log(activeCategory, activeServer);

  const { mutate: episode, isPending: gettingEpisode } = useEpisode();
  const { isPending, isRefetching, data } = useServers(epId);

  if (isPending || isRefetching || gettingEpisode) return <Spinner />;

  const { dub, raw, sub } = data;

  return (
    <StyledServers>
      <Row>
        <Category>{sub?.length !== 0 && <span>Sub: </span>}</Category>
        <ServerList>
          {sub?.length !== 0 &&
            sub?.map((s, i) => (
              <Btn
                $isactive={
                  activeCategory === "sub" &&
                  activeServer === servers_map[s.serverId]
                }
                key={i}
                value={s.serverId}
                onClick={(e) => {
                  searchParam.set("server", servers_map[e.target.value]);
                  searchParam.set("category", "sub");
                  setSearchParam(searchParam);
                  episode({
                    epId,
                    category: "sub",
                    server: servers_map[e.target.value],
                  });
                }}
              >
                {servers_map[s.serverId]}
              </Btn>
            ))}
        </ServerList>
      </Row>
      <Row>
        <Category>{dub?.length !== 0 && <span>Dub: </span>}</Category>
        <ServerList>
          {dub?.length !== 0 &&
            dub?.map((s, i) => (
              <Btn
                $isactive={
                  activeCategory === "dub" &&
                  activeServer === servers_map[s.serverId]
                }
                key={i}
                value={s.serverId}
                onClick={(e) => {
                  searchParam.set("server", servers_map[e.target.value]);
                  searchParam.set("category", "dub");
                  setSearchParam(searchParam);
                  episode({
                    epId,
                    category: "dub",
                    server: servers_map[e.target.value],
                  });
                }}
              >
                {servers_map[s.serverId]}
              </Btn>
            ))}
        </ServerList>
      </Row>
      <Row>
        <Category>{raw?.length !== 0 && <span>Raw: </span>}</Category>
        <ServerList>
          {raw?.length !== 0 &&
            raw?.map((s, i) => (
              <Btn
                $isactive={
                  activeCategory === "raw" &&
                  activeServer === servers_map[s.serverId]
                }
                key={i}
                value={s.serverId}
                onClick={(e) => {
                  searchParam.set("server", servers_map[e.target.value]);
                  searchParam.set("category", "raw");
                  setSearchParam(searchParam);
                  episode({
                    epId,
                    category: "raw",
                    server: servers_map[e.target.value],
                  });
                }}
              >
                {servers_map[s.serverId]}
              </Btn>
            ))}
        </ServerList>
      </Row>
    </StyledServers>
  );
}

export default Servers;