import { useSearchParams } from "react-router-dom";
import { servers_map } from "../../helper/servers";

import useServers from "../../features/Episodes/useServers";
import useEpisode from "../../features/Episodes/useEpisode";
import styled from "styled-components";
import Spinner from "../Spinner";

const StyledServers = styled.div`
  margin-bottom: 20px;
`;

function Servers() {
  const [searchParam, setSearchParam] = useSearchParams();
  const epId = searchParam.get("epId");

  const { mutate: episode, isPending: gettingEpisode } = useEpisode();
  const { isPending, isRefetching, data } = useServers(epId);

  if (isPending || isRefetching || gettingEpisode) return <Spinner />;

  const { dub, raw, sub } = data;
  
  return (
    <StyledServers>
      <div>
        {sub.length !== 0 && <span>Sub: </span>}
        {sub.length !== 0 &&
          sub.map((s, i) => (
            <button
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
            </button>
          ))}
      </div>
      <div>
        {dub.length !== 0 && <span>Dub: </span>}
        {dub.length !== 0 &&
          dub.map((s, i) => (
            <button
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
            </button>
          ))}
      </div>
      <div>
        {raw.length !== 0 && <span>Raw: </span>}
        {raw.length !== 0 &&
          raw.map((s, i) => (
            <button
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
            </button>
          ))}
      </div>
    </StyledServers>
  );
}

export default Servers;
