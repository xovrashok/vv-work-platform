import type { Partner } from "../../types/api";
import Skeleton from "../ui/Skeleton";
import ErrorState from "../ui/ErrorState";
import PartnerCard from "./PartnerCard";

interface PartnerListProps {
  partners: Partner[] | undefined;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

const PartnerList = ({
  partners,
  isLoading,
  error,
  onRetry,
}: PartnerListProps) => {
  return (
    <>
      {isLoading && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      )}

      {error && <ErrorState onRetry={onRetry} />}

      {!isLoading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners?.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      )}
    </>
  );
};

export default PartnerList;
