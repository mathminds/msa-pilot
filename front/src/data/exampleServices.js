const exampleServices = [
    {
        id: 1,
        title: '음식 배달 서비스',
        serviceProvider: '요기요',

        dataProviders: [
            {
                'provider': '맛집 리뷰어',
                'providedData': ['리뷰 내역']
            },
            {
                'provider': '식당 예약 앱',
                'providedData': ['예약 내역']
            },
            {
                'provider': '음식 추천 알고리즘',
                'providedData': ['선호 음식']
            }
        ],
        details: ['주문 내역', '배달 위치'],
        thirdPartySharing: [
            {
                'recipient': '배달의민족',
                'sharedData': ['리뷰 내역, 예약 내역']
            },
            {
                'recipient': '망고플레이트',
                'sharedData': ['리뷰 내역']
            },
            {
                'recipient': '푸드플라이',
                'sharedData': ['리뷰 내역']
            }
        ],
        thirdPartySharedData: ['배달 위치'],
        thirdPartyRecipients: ['네이버', '카카오', '티몬']
    },
    {
        id: 2,
        title: '여행 예약 서비스',
        serviceProvider: '여기어때',

        dataProviders: [
            {
                'provider': '호텔 예약 사이트',
                'providedData': ['예약 내역']
            },
            {
                'provider': '항공권 예약 앱',
                'providedData': ['예약 내역']
            },
            {
                'provider': '여행 일정 앱',
                'providedData': ['일정 내역']
            }
        ],
        details: ['여행지 선호도', '여행 일정'],
        thirdPartySharing: [
            {
                'recipient': '트립어드바이저',
                'sharedData': ['여행 일정']
            },
            {
                'recipient': '에어비앤비',
                'sharedData': ['예약 내역']
            },
            {
                'recipient': '여행스케줄러',
                'sharedData': ['일정 내역']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 3,
        title: '운동 관리 서비스',
        serviceProvider: '헬스플러스',

        dataProviders: [
            {
                'provider': '운동 기록 앱',
                'providedData': ['운동 기록']
            },
            {
                'provider': '식단 관리 앱',
                'providedData': ['식단 기록']
            },
            {
                'provider': '수면 분석 앱',
                'providedData': ['수면 기록']
            }
        ],
        details: ['운동 성취도', '체력 수치'],
        thirdPartySharing: [
            {
                'recipient': '피트빗',
                'sharedData': ['운동 기록']
            },
            {
                'recipient': '스트라바',
                'sharedData': ['운동 기록']
            },
            {
                'recipient': '애플 헬스',
                'sharedData': ['운동 기록', '체력 수치']
            }
        ],
        thirdPartySharedData: ['식단 기록'],
        thirdPartyRecipients: ['알라딘', '교보문고', '예스24']
    },
    {
        id: 4,
        title: '온라인 쇼핑 서비스',
        serviceProvider: '쿠팡',

        dataProviders: [
            {
                'provider': '패션 쇼핑몰',
                'providedData': ['구매 내역']
            },
            {
                'provider': '전자제품 쇼핑몰',
                'providedData': ['구매 내역']
            },
            {
                'provider': '식품 쇼핑몰',
                'providedData': ['구매 내역']
            }
        ],
        details: ['좋아하는 상품', '배송 주소'],
        thirdPartySharing: [
            {
                'recipient': '11번가',
                'sharedData': ['구매 내역']
            },
            {
                'recipient': 'G마켓',
                'sharedData': ['구매 내역']
            },
            {
                'recipient': '위메프',
                'sharedData': ['구매 내역']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 5,
        title: '자동차 서비스',
        serviceProvider: '카플러스',

        dataProviders: [
            {
                'provider': '자동차 정비소',
                'providedData': ['정비 내역']
            },
            {
                'provider': '주유소',
                'providedData': ['주유 내역']
            },
            {
                'provider': '주차 앱',
                'providedData': ['주차 내역']
            }
        ],
        details: ['차량 성능', '주행 기록'],
        thirdPartySharing: [
            {
                'recipient': '카카오내비',
                'sharedData': ['주행 기록']
            },
            {
                'recipient': '네비게이토',
                'sharedData': ['주행 기록']
            },
            {
                'recipient': '티맵',
                'sharedData': ['주행 기록']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 6,
        title: '금융 관리 서비스',
        serviceProvider: '뱅크테크',

        dataProviders: [
            {
                'provider': '은행 앱',
                'providedData': ['거래 내역']
            },
            {
                'provider': '금융 상품 앱',
                'providedData': ['상품 정보']
            },
            {
                'provider': '투자 앱',
                'providedData': ['투자 내역']
            }
        ],
        details: ['자산 분포', '수익률'],
        thirdPartySharing: [
            {
                'recipient': '카카오뱅크',
                'sharedData': ['거래 내역']
            },
            {
                'recipient': '신한은행',
                'sharedData': ['거래 내역']
            },
            {
                'recipient': '우리은행',
                'sharedData': ['거래 내역']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 7,
        title: '온라인 교육 서비스',
        serviceProvider: '에듀테크',

        dataProviders: [
            {
                'provider': '온라인 강의 플랫폼',
                'providedData': ['수강 내역']
            },
            {
                'provider': '학습 앱',
                'providedData': ['학습 기록']
            },
            {
                'provider': '문제은행 앱',
                'providedData': ['문제 풀이 기록']
            }
        ],
        details: ['관심 분야', '학습 성취도'],
        thirdPartySharing: [
            {
                'recipient': '네이버 교육',
                'sharedData': ['수강 내역']
            },
            {
                'recipient': '다음 교육',
                'sharedData': ['수강 내역']
            },
            {
                'recipient': '스터디파이',
                'sharedData': ['학습 기록']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 8,
        title: '게임 서비스',
        serviceProvider: '게임테크',

        dataProviders: [
            {
                'provider': '게임 플랫폼',
                'providedData': ['플레이 기록']
            },
            {
                'provider': '게임 커뮤니티',
                'providedData': ['커뮤니티 활동']
            },
            {
                'provider': '게임 아이템 쇼핑몰',
                'providedData': ['구매 내역']
            }
        ],
        details: ['선호하는 장르', '플레이 시간'],
        thirdPartySharing: [
            {
                'recipient': '넥슨',
                'sharedData': ['플레이 기록']
            },
            {
                'recipient': '넷마블',
                'sharedData': ['플레이 기록']
            },
            {
                'recipient': '카카오게임즈',
                'sharedData': ['플레이 기록']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 9,
        title: '음악 스트리밍 서비스',
        serviceProvider: '뮤직플러스',

        dataProviders: [
            {
                'provider': '음악 스트리밍 앱',
                'providedData': ['재생 기록']
            },
            {
                'provider': '음악 추천 알고리즘',
                'providedData': ['선호 장르']
            },
            {
                'provider': '가사 검색 앱',
                'providedData': ['검색 기록']
            }
        ],
        details: ['좋아하는 아티스트', '재생 시간'],
        thirdPartySharing: [],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 10,
        title: '소셜 미디어 서비스',
        serviceProvider: '소미테크',

        dataProviders: [
            {
                'provider': '소셜 네트워크 앱',
                'providedData': ['게시물 내역']
            },
            {
                'provider': '메신저 앱',
                'providedData': ['대화 내역']
            },
            {
                'provider': '이미지 공유 앱',
                'providedData': ['이미지 업로드 내역']
            }
        ],
        details: ['관심사', '친구 목록'],
        thirdPartySharing: [
            {
                'recipient': '인스타그램',
                'sharedData': ['게시물 내역']
            },
            {
                'recipient': '페이스북',
                'sharedData': ['게시물 내역']
            },
            {
                'recipient': '카카오톡',
                'sharedData': ['대화 내역']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 11,
        title: '음식 레시피 서비스',
        serviceProvider: '레시플러스',

        dataProviders: [
            {
                'provider': '레시피 앱',
                'providedData': ['레시피 정보']
            },
            {
                'provider': '식재료 배송 서비스',
                'providedData': ['주문 내역']
            },
            {
                'provider': '요리 동영상 플랫폼',
                'providedData': ['시청 기록']
            }
        ],
        details: ['즐겨찾는 레시피', '요리 시간'],
        thirdPartySharing: [
            {
                'recipient': '요리사 커뮤니티',
                'sharedData': ['레시피 정보']
            },
            {
                'recipient': '식재료 쇼핑몰',
                'sharedData': ['주문 내역']
            },
            {
                'recipient': '요리 방송',
                'sharedData': ['시청 기록']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 12,
        title: '뷰티 서비스',
        serviceProvider: '뷰티테크',

        dataProviders: [
            {
                'provider': '화장품 쇼핑몰',
                'providedData': ['구매 내역']
            },
            {
                'provider': '피부 관리 앱',
                'providedData': ['피부 상태 기록']
            },
            {
                'provider': '메이크업 튜토리얼 앱',
                'providedData': ['시청 기록']
            }
        ],
        details: ['선호하는 브랜드', '피부 타입'],
        thirdPartySharing: [
            {
                'recipient': '미샤',
                'sharedData': ['구매 내역']
            },
            {
                'recipient': '에뛰드하우스',
                'sharedData': ['구매 내역']
            },
            {
                'recipient': '아리따움',
                'sharedData': ['구매 내역']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 13,
        title: '날씨 정보 서비스',
        serviceProvider: '웨더플러스',

        dataProviders: [
            {
                'provider': '날씨 앱',
                'providedData': ['날씨 정보']
            },
            {
                'provider': '미세먼지 앱',
                'providedData': ['대기 오염 정보']
            },
            {
                'provider': '일출 일몰 앱',
                'providedData': ['일출 일몰 시간']
            }
        ],
        details: ['현재 온도', '강수량'],
        thirdPartySharing: [
            {
                'recipient': '네이버 날씨',
                'sharedData': ['날씨 정보']
            },
            {
                'recipient': '다음 날씨',
                'sharedData': ['날씨 정보']
            },
            {
                'recipient': '기상청',
                'sharedData': ['날씨 정보', '대기 오염 정보']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 14,
        title: '사진 편집 서비스',
        serviceProvider: '포토플러스',

        dataProviders: [
            {
                'provider': '사진 편집 앱',
                'providedData': ['편집 기록']
            },
            {
                'provider': '필터 앱',
                'providedData': ['사용한 필터']
            },
            {
                'provider': '사진 저장 앱',
                'providedData': ['저장한 사진']
            }
        ],
        details: ['선호하는 효과', '편집 시간'],
        thirdPartySharing: [
            {
                'recipient': '인스타그램',
                'sharedData': ['편집 기록']
            },
            {
                'recipient': '페이스북',
                'sharedData': ['편집 기록']
            },
            {
                'recipient': '카카오톡',
                'sharedData': ['저장한 사진']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 15,
        title: '건강 관리 서비스',
        serviceProvider: '헬스테크',

        dataProviders: [
            {
                'provider': '건강 정보 앱',
                'providedData': ['건강 기록']
            },
            {
                'provider': '운동 동영상 플랫폼',
                'providedData': ['시청 기록']
            },
            {
                'provider': '식단 추천 앱',
                'providedData': ['추천 식단']
            }
        ],
        details: ['체중 변화', '수면 시간'],
        thirdPartySharing: [
            {
                'recipient': '헬스 커뮤니티',
                'sharedData': ['건강 기록']
            },
            {
                'recipient': '운동 장비 쇼핑몰',
                'sharedData': ['시청 기록']
            },
            {
                'recipient': '다이어트 앱',
                'sharedData': ['추천 식단']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 16,
        title: '뉴스 서비스',
        serviceProvider: '뉴스테크',

        dataProviders: [
            {
                'provider': '뉴스 앱',
                'providedData': ['기사 내역']
            },
            {
                'provider': '뉴스 요약 앱',
                'providedData': ['요약된 기사']
            },
            {
                'provider': '뉴스 분석 앱',
                'providedData': ['분석된 기사']
            }
        ],
        details: ['관심 있는 분야', '뉴스 소비 시간'],
        thirdPartySharing: [
            {
                'recipient': '네이버 뉴스',
                'sharedData': ['기사 내역']
            },
            {
                'recipient': '다음 뉴스',
                'sharedData': ['기사 내역']
            },
            {
                'recipient': '구글 뉴스',
                'sharedData': ['분석된 기사']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 17,
        title: '택배 배송 서비스',
        serviceProvider: '택배테크',

        dataProviders: [
            {
                'provider': '택배 앱',
                'providedData': ['배송 내역']
            },
            {
                'provider': '배송 조회 앱',
                'providedData': ['조회 기록']
            },
            {
                'provider': '택배 비교 앱',
                'providedData': ['비교 결과']
            }
        ],
        details: ['배송 상태', '배송 시간'],
        thirdPartySharing: [
            {
                'recipient': '네이버 택배',
                'sharedData': ['배송 내역']
            },
            {
                'recipient': 'CJ대한통운',
                'sharedData': ['배송 내역']
            },
            {
                'recipient': '한진택배',
                'sharedData': ['조회 기록']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 18,
        title: '스포츠 서비스',
        serviceProvider: '스포츠테크',

        dataProviders: [
            {
                'provider': '스포츠 중계 앱',
                'providedData': ['시청 기록']
            },
            {
                'provider': '운동 기록 앱',
                'providedData': ['운동 기록']
            },
            {
                'provider': '스포츠 뉴스 앱',
                'providedData': ['뉴스 내역']
            }
        ],
        details: ['선호하는 스포츠', '시청 시간'],
        thirdPartySharing: [
            {
                'recipient': '네이버 스포츠',
                'sharedData': ['시청 기록']
            },
            {
                'recipient': '다음 스포츠',
                'sharedData': ['시청 기록']
            },
            {
                'recipient': '스포츠 커뮤니티',
                'sharedData': ['뉴스 내역']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 19,
        title: '영화 스트리밍 서비스',
        serviceProvider: '무비플러스',

        dataProviders: [
            {
                'provider': '영화 스트리밍 앱',
                'providedData': ['시청 기록']
            },
            {
                'provider': '영화 추천 알고리즘',
                'providedData': ['선호 장르']
            },
            {
                'provider': '영화 리뷰 앱',
                'providedData': ['리뷰 내역']
            }
        ],
        details: ['좋아하는 배우', '시청 시간'],
        thirdPartySharing: [],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    },
    {
        id: 20,
        title: '헤어 서비스',
        serviceProvider: '헤어테크',

        dataProviders: [
            {
                'provider': '미용실 예약 앱',
                'providedData': ['예약 내역']
            },
            {
                'provider': '헤어 스타일링 앱',
                'providedData': ['스타일링 기록']
            },
            {
                'provider': '헤어 컬러링 앱',
                'providedData': ['컬러링 기록']
            }
        ],
        details: ['선호하는 스타일', '헤어 컬러'],
        thirdPartySharing: [
            {
                'recipient': '미용실 리뷰 플랫폼',
                'sharedData': ['예약 내역']
            },
            {
                'recipient': '헤어 제품 쇼핑몰',
                'sharedData': ['스타일링 기록']
            },
            {
                'recipient': '헤어 컬러링 커뮤니티',
                'sharedData': ['컬러링 기록']
            }
        ],
        thirdPartySharedData: [],
        thirdPartyRecipients: [],
    }
];

export default exampleServices;
