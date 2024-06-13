import styled from "styled-components";
import useServers from "../../features/Episodes/useServers";
import { servers_map } from "../../helper/servers";
import Spinner from "../Spinner";
const StyledServers = styled.div`
  margin-bottom: 20px;
`

function Servers({ epId, setServer, setCategory }) {
  const { isPending, isRefetching, data, error } = useServers(epId);
  if (isPending || isRefetching) return <Spinner />;
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
                setServer(servers_map[e.target.value]);
                setCategory("sub");
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
                setServer(servers_map[e.target.value]);
                setCategory("dub");
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
                setServer(servers_map[e.target.value]);
                setCategory("raw");
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
