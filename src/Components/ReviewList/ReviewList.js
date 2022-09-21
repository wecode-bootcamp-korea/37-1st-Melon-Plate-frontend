import React from 'react';
import GreenMelon from '../../Pages/ReviewWrite/GreenMelon';
import './ReviewList.scss';

const ReviewList = () => {
  return (
    <div className="reviewList">
      <div className="reviewListTop">
        <span className="reviewListTopReviewLeft">
          <span className="reviewListTopReviewLeftText">리뷰 </span>
          <span className="reviewListTopReviewLeftNumber"> (0)</span>
        </span>
        <span className="reviewListTopReviewRight">
          <span className="reviewListTopReviewRightBtn">
            <button className="reviewListTopReviewRightBtns">높은순</button>
            <span>
              <i className="fa-solid fa-arrow-up-wide-short" />
            </span>
          </span>
          <span className="reviewListTopReviewRightBtn">
            <button className="reviewListTopReviewRightBtns">낮은순</button>
            <span>
              <i className="fa-solid fa-arrow-down-wide-short" />
            </span>
          </span>
          <span className="reviewListTopReviewRightBtn">
            <button className="reviewListTopReviewRightBtns">최근순</button>
            <span>
              <i className="fa-solid fa-arrow-rotate-right" />
            </span>
          </span>
        </span>
      </div>
      <div className="reviewListMain">
        <span className="reviewListMainLeft">
          <div className="reviewListMainLeftPhoto">
            <img
              src={`${process.env.PUBLIC_URL}/images/20596969-F8C3-4D15-9D89-16ECCE2090F5.jpeg`}
              className="reviewListMainLeftPhotos"
            />
          </div>
          <div className="reviewListMainLeftName">이름</div>
          <div className="reviewListMainLeftReviews">
            <i class="fa-solid fa-pen" />
            0
            <i class="fa-solid fa-people-group" />0
          </div>
        </span>
        <span className="reviewListMainCenter">
          <div className="reviewListMainCenterDay">2022-06-08</div>
          <div className="reviewListMainCenterReview">
            정말 좋아했었는데 왜 점점 ㅠㅠ 처음 오레노 라멘 본점을 방문시에는
            정말 센세이션이었다. 그때의 그 토리빠이탄을 잊을 수가 없다. 고소하고
            설렁탕같기도한데 또 더 진하고 정말 황홀했다. 그 다음 방문 시에
            시오라멘이 생겼고 이또한 환상적이었다. 토리빠이탄만 먹었을때는 끝에
            조금 느끼한 감이 있었지만 시오라멘은 처음부터 끝까지 상큼하게 그리고
            또 진하게 맛을 유지했다. 때문에 시오라멘과 토리빠이탄은 내게 환상의
            짝궁이었다. 그런데....... 언제부턴가 그 맛이 변한건지 내 입맛이
            변한건지 아니면 너무 익숙해진 탓인지 갈 때마다 점점 '그냥그렇다'라는
            생각이 들기 시작했다. 그래서 오랫동안 이곳을 잊고 지냈다. 그렇게
            일년? 정도 흐른 후 최근 송파점으로 재방문했다. 다시 그 놀라움을
            전해주길 바라면서. 그러나... 그 놀라움은 이번에도 느끼지 못했다.
            이정도로 오랫동안 안갔는데도 맛있다고 느끼지 못한 것을 보면 익숙해진
            탓은 아닌것같다.
          </div>
          <div className="reviewListMainCenterPhoto">
            <GreenMelon />
            <GreenMelon />
            <GreenMelon />
            <GreenMelon />
            <GreenMelon />
          </div>
        </span>
        <span className="reviewListMainRight">
          <img
            src={`${process.env.PUBLIC_URL}/images/20596969-F8C3-4D15-9D89-16ECCE2090F5.jpeg`}
            className="reviewListMainRightMelon"
          />
          <div className="reviewListMainRightPoint"> (x0)</div>
        </span>
      </div>
    </div>
  );
};

export default ReviewList;
