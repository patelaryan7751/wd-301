import React, { useEffect, Suspense } from "react";
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
const MemberListItems = React.lazy(() => import("./MemberListItems"));
import ErrorBoundary from "../../components/ErrorBoundary";

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, []);
  return (
    <div className="mt-5">
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberListItems />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default MemberList;
