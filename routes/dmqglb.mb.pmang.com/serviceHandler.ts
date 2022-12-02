import { RPCResponse } from "./routes";

//everything ending with _yn can only be "Y" or "N"
export interface RPCResponseResult {
  api_url: string;
  file_server_url: string;
  file_manage_ver: string;
  service_type: string;
  coupon_yn: string;
  terms_yn: string;
  pp_live_status: string; //Y or N
  inspection_notice_yn: string;
  event_url: string;
}

export default function serviceHandler(
  method: string,
  params: string[]
): RPCResponse {
  return {
    result: {
      api_url: "http://dmqglb.mb.pmang.com/DMQ/rpc",
      file_server_url: "http://dmqglb.mb.pmang.com/patch",
      file_manage_ver: "1.003.005",
      service_type: "LIVE",
      coupon_yn: "Y",
      terms_yn: "Y",
      pp_live_status: "Y",
      inspection_notice_yn: "N",
      event_url: "http://dmqglb.mb.pmang.com/score/",
    },
    error: null,
    id: 0,
  };
}
