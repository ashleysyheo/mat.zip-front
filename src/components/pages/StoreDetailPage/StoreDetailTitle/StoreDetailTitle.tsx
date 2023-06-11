import { useContext } from "react";

import { campusContext } from "context/CampusContextProvider";

import Heading from "components/common/Heading/Heading";
import Star from "components/common/Star/Star";
import Text from "components/common/Text/Text";

import * as S from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle.style";

interface StoreDetailTitleProps {
  storeInfo: {
    id: number;
    name: string;
    address: string;
    distance: number;
    kakaoMapUrl: string;
    imageUrl: string;
    rating: number;
    reviewCount: number;
  };
}

function StoreDetailTitle({
  storeInfo: { name, rating, reviewCount, address, distance, kakaoMapUrl },
}: StoreDetailTitleProps) {
  const campus = useContext(campusContext);

  return (
    <S.TitleContainer>
      <Heading size="small">{name}</Heading>
      <S.RatingContainer>
        <Star isFilled={rating > 0} />
        <S.RatingWrapper>
          <Text css={S.ratingTextStyle}>
            {rating > 0 ? rating.toFixed(1) : "여기 어때요?"}
          </Text>
          {rating > 0 && <Text>({reviewCount})</Text>}
        </S.RatingWrapper>
      </S.RatingContainer>
      <S.DescriptionWrapper>
        <Text size="small">{address}</Text>
        <Text size="small">
          {campus} 캠퍼스 기준 도보 {distance}분
        </Text>
        <div>
          <S.KakaoLink href={kakaoMapUrl} target="_blank">
            카카오 맵으로 열기
          </S.KakaoLink>
        </div>
      </S.DescriptionWrapper>
    </S.TitleContainer>
  );
}

export default StoreDetailTitle;
