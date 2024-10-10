"use client";
import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      width="100%"
      //   padding="4"
      minW={"100%"}
      //   backgroundColor="blue.100"
      position="fixed"
      bottom="0"
      zIndex="1"
      fontWeight={'400'}
      fontSize={{md:'1rem',base:'0.65rem'}}
    >
      <Flex
        minW={"100%"}
        justifyContent="space-between"
        flexDirection={"column"}
        alignItems="center"
      >
        <Text display={'flex'} flexDirection={'row'} gap={{md:'0.5rem',base:'0.35rem'}} alignItems={'center'} p={2} minW={"100%"} color={'#0000008A'} bg={"#C7DAE9"} fontSize="sm">
        <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3193 7.94255V4.29218C10.3193 4.1086 10.1688 3.95979 9.98287 3.95979H9.23455C9.04867 3.95979 8.89809 4.1086 8.89809 4.29218V7.94255C8.89809 10.3492 10.1613 11.9223 12.1617 11.9223C12.8183 11.9223 13.4137 11.6689 13.8421 11.2603C14.0558 11.0566 14.4117 11.205 14.4117 11.4986C14.4117 11.6822 14.5623 11.831 14.7481 11.831H15.4965C15.6823 11.831 15.833 11.6822 15.833 11.4986V4.29218C15.833 4.1086 15.6823 3.95979 15.4965 3.95979H14.7481C14.5623 3.95979 14.4117 4.1086 14.4117 4.29218V7.93065C14.4117 9.43898 13.5695 10.5173 12.3986 10.5173C11.1354 10.5173 10.3193 9.517 10.3193 7.94255ZM38.5818 7.99138V11.6449C38.5818 11.8039 38.7123 11.9329 38.8732 11.9329H39.7083C39.8692 11.9329 39.9998 11.8039 39.9998 11.6449V7.99138C39.9998 5.56893 38.7409 3.98434 36.7134 3.98434C36.0167 3.98434 35.3887 4.26717 34.9535 4.71749C34.7697 4.90749 34.4474 4.7864 34.4474 4.52358V0.287937C34.4474 0.128902 34.3168 0 34.1559 0H33.3209C33.16 0 33.0295 0.128902 33.0295 0.287937V11.6449C33.0295 11.8039 33.16 11.9329 33.3209 11.9329H34.1559C34.3168 11.9329 34.4474 11.8039 34.4474 11.6449V8.0045C34.4474 6.48557 35.3087 5.38562 36.4748 5.38562C37.7603 5.38562 38.5818 6.40698 38.5818 7.99138ZM30.3001 7.99138V11.6449C30.3001 11.8039 30.4306 11.9329 30.5915 11.9329H31.4266C31.5876 11.9329 31.7181 11.8039 31.7181 11.6449V7.99138C31.7181 5.56893 30.4592 3.98434 28.4317 3.98434C27.7351 3.98434 27.1071 4.26717 26.6718 4.71749C26.4881 4.90749 26.1657 4.7864 26.1657 4.52358V0.287937C26.1657 0.128902 26.0353 0 25.8742 0H25.0392C24.8783 0 24.7478 0.128902 24.7478 0.287937V11.6449C24.7478 11.8039 24.8783 11.9329 25.0392 11.9329H25.8742C26.0353 11.9329 26.1657 11.8039 26.1657 11.6449V8.0045C26.1657 6.48557 27.0271 5.38562 28.1932 5.38562C29.4786 5.38562 30.3001 6.40698 30.3001 7.99138ZM6.2106 7.99138V11.6449C6.2106 11.8039 6.34104 11.9329 6.50198 11.9329H7.33707C7.49801 11.9329 7.62846 11.8039 7.62846 11.6449V7.99138C7.62846 5.56893 6.36965 3.98434 4.3422 3.98434C3.64546 3.98434 3.01751 4.26717 2.58222 4.71749C2.39851 4.90749 2.07607 4.7864 2.07607 4.52358V0.287937C2.07607 0.128902 1.94562 0 1.78468 0H0.949681C0.788742 0 0.658203 0.128902 0.658203 0.287937V11.6449C0.658203 11.8039 0.788742 11.9329 0.949681 11.9329H1.78468C1.94562 11.9329 2.07607 11.8039 2.07607 11.6449V8.0045C2.07607 6.48557 2.93751 5.38562 4.10361 5.38562C5.38905 5.38562 6.2106 6.40698 6.2106 7.99138ZM18.7311 6.31891L18.7346 6.29603C18.737 6.2804 18.7396 6.26348 18.7401 6.26004C18.817 5.64278 19.471 5.17729 20.2604 5.17729L20.2919 5.17748C20.985 5.17748 21.4783 5.4617 21.7999 6.04622C21.8344 6.10872 21.9138 6.13216 21.9771 6.09793C22.0406 6.06389 22.064 5.9854 22.0296 5.92281C21.6631 5.25691 21.0784 4.9193 20.293 4.9193L20.2615 4.91903C19.3241 4.91903 18.5752 5.46979 18.4808 6.2273L18.4763 6.25632C18.474 6.27092 18.472 6.2845 18.4717 6.28636C18.4633 6.35648 18.5137 6.41982 18.5846 6.42912C18.5904 6.42977 18.596 6.43014 18.6016 6.43014C18.6657 6.43014 18.7217 6.38317 18.7311 6.31891ZM22.3286 9.46715C22.3286 8.28509 21.525 7.99343 20.3896 7.71051L20.2543 7.67564C19.9387 7.59277 19.4105 7.4542 19.069 7.13594C19.0165 7.08711 18.9338 7.08962 18.8843 7.14133C18.8348 7.19323 18.8372 7.27498 18.8897 7.3239C19.2793 7.68708 19.8477 7.83616 20.1872 7.92516L20.3257 7.96088C21.5095 8.25598 22.0672 8.50076 22.0672 9.46715C22.0672 10.2169 21.3372 10.7406 20.2919 10.7406C19.5152 10.7406 18.8477 10.3585 18.5498 9.74347C18.5187 9.67911 18.4406 9.65177 18.3755 9.68264C18.3104 9.71343 18.2829 9.79053 18.314 9.85488C18.6558 10.5605 19.4136 10.9988 20.2919 10.9988C21.491 10.9988 22.3286 10.369 22.3286 9.46715ZM21.3292 6.0878C21.3827 6.04008 21.387 5.95843 21.3388 5.90542C21.1037 5.6477 20.8172 5.51629 20.4368 5.49192C20.3656 5.48774 20.3026 5.54112 20.2979 5.61236C20.2932 5.6836 20.3479 5.74499 20.4199 5.74964C20.7278 5.76935 20.9582 5.8738 21.1446 6.07831C21.1703 6.10668 21.206 6.121 21.2417 6.121C21.2729 6.121 21.3041 6.11012 21.3292 6.0878ZM22.6518 10.3907C22.8232 10.1107 22.91 9.80131 22.91 9.47078C22.91 7.82249 21.5251 7.47717 20.5139 7.22513L20.4108 7.19872C19.843 7.04917 19.3333 6.87395 19.3332 6.38141C19.3354 6.28859 19.3572 6.20321 19.3982 6.12732C19.4322 6.06445 19.4081 5.98624 19.3443 5.95257C19.2805 5.91918 19.2016 5.9428 19.1676 6.00586C19.1073 6.11746 19.0751 6.2419 19.0719 6.37843C19.0719 7.11343 19.8679 7.32297 20.3435 7.44824L20.4499 7.47549C21.4805 7.73246 22.6487 8.02365 22.6487 9.47078C22.6487 9.75342 22.5745 10.018 22.4282 10.257C22.3908 10.318 22.4106 10.3974 22.4723 10.4343C22.4934 10.4469 22.5167 10.453 22.5399 10.453C22.584 10.453 22.6272 10.4309 22.6518 10.3907ZM21.8172 11.1487C21.8809 11.1152 21.9048 11.0369 21.8707 10.974C21.8366 10.9111 21.7576 10.8874 21.6939 10.9211C21.2979 11.1304 20.8131 11.2412 20.2919 11.2412C19.2764 11.2412 18.3547 10.705 17.9982 9.90725C17.9804 9.86753 17.9689 9.82605 17.9639 9.78411C17.9555 9.71315 17.8903 9.66209 17.8189 9.67092C17.7472 9.6792 17.6959 9.74337 17.7044 9.81415C17.7124 9.88176 17.7308 9.94817 17.7591 10.0115C18.1567 10.9014 19.1746 11.4994 20.2919 11.4994C20.856 11.4994 21.3835 11.3782 21.8172 11.1487ZM21.5532 10.0674C21.7218 9.90343 21.8109 9.70124 21.8109 9.48287C21.8109 9.30338 21.7682 9.13941 21.6838 8.99572C21.6389 8.91918 21.5811 8.84654 21.5121 8.77986C21.4604 8.7301 21.3777 8.73094 21.3273 8.78191C21.2768 8.83297 21.2778 8.91472 21.3293 8.96457C21.3815 9.01488 21.4247 9.06901 21.4577 9.12518C21.5196 9.23055 21.5496 9.34755 21.5496 9.48287C21.5496 9.63261 21.4891 9.76737 21.3699 9.88334C21.1507 10.0966 20.7603 10.2204 20.3277 10.2132C20.0709 10.2096 19.8258 10.1494 19.6188 10.0394C19.4685 9.95951 19.3714 9.84623 19.3071 9.77127C19.2947 9.75695 19.2836 9.74402 19.2737 9.73296C19.2258 9.67957 19.1432 9.67492 19.0891 9.72235C19.0353 9.76979 19.0305 9.85135 19.0785 9.90464C19.0871 9.91441 19.0969 9.92575 19.1076 9.93831C19.18 10.0227 19.301 10.1637 19.4949 10.2668C19.7387 10.3964 20.0254 10.4672 20.3237 10.4715C20.336 10.4717 20.3482 10.4718 20.3604 10.4718C20.8479 10.4718 21.2918 10.3219 21.5532 10.0674ZM20.4333 8.39697C20.451 8.32787 20.4085 8.25756 20.3385 8.24016C20.2436 8.21654 20.1419 8.19329 20.0361 8.17125C18.7192 7.89708 18.132 7.35022 18.132 6.39787C18.132 5.35261 19.0045 4.65015 20.3031 4.65015C21.0804 4.65015 22.0604 5.08011 22.3754 6.02399C22.3978 6.0917 22.4719 6.12862 22.5403 6.1063C22.6089 6.08389 22.6461 6.01097 22.6235 5.94318C22.268 4.87736 21.1714 4.39198 20.3031 4.39198C18.8482 4.39198 17.8706 5.19813 17.8706 6.39787C17.8706 7.81988 19.0757 8.23533 19.9822 8.42394C20.0846 8.44533 20.1829 8.46774 20.2746 8.49053C20.2853 8.49323 20.296 8.49453 20.3067 8.49453C20.3651 8.49453 20.4183 8.45556 20.4333 8.39697ZM23.4167 9.47078C23.4167 8.68305 23.2317 8.16595 22.8169 7.79412C22.7635 7.74623 22.6808 7.75032 22.6323 7.80296C22.5838 7.85578 22.5879 7.93744 22.6413 7.98543C23.0015 8.30834 23.1553 8.75261 23.1553 9.47078C23.1553 10.7866 21.9511 11.7417 20.2919 11.7417C19.1638 11.7417 18.0767 11.1317 17.5865 10.2239L17.5728 10.1988C17.535 10.1309 17.4566 9.98955 17.393 9.7815C17.3721 9.71315 17.2992 9.67437 17.2302 9.6952C17.161 9.71585 17.122 9.78783 17.1428 9.85609C17.2142 10.0901 17.3016 10.2475 17.3437 10.3231L17.3558 10.3454C17.8902 11.335 19.0701 12 20.2919 12C22.1025 12 23.4167 10.9364 23.4167 9.47078ZM19.9923 8.86933C20.0117 8.8006 19.9712 8.72945 19.9016 8.7102C19.2795 8.53833 17.985 8.18074 17.6406 7.02331C17.6202 6.95496 17.5475 6.91562 17.4783 6.93598C17.409 6.95607 17.3694 7.02787 17.3898 7.09632C17.7752 8.39092 19.216 8.78898 19.8312 8.95899C19.843 8.96224 19.8548 8.96382 19.8665 8.96382C19.9236 8.96382 19.9761 8.92643 19.9923 8.86933ZM17.5798 6.03888C17.7601 4.90303 18.8252 4.14915 20.2394 4.14915C20.2598 4.14915 20.2805 4.14933 20.3011 4.14961C20.3755 4.14887 20.4327 4.09381 20.4338 4.02248C20.435 3.95124 20.3774 3.89255 20.3052 3.89143C18.7249 3.86521 17.5255 4.71395 17.3216 5.99879C17.3104 6.06938 17.3591 6.13541 17.4304 6.14639C17.4374 6.1476 17.4441 6.14806 17.4509 6.14806C17.5142 6.14806 17.5697 6.10258 17.5798 6.03888ZM23.067 6.08975C22.998 6.08975 22.9403 6.03636 22.9366 5.96745C22.917 5.79883 22.551 4.77217 21.4076 4.3451C21.3401 4.31981 21.306 4.24531 21.3315 4.17853C21.357 4.11195 21.4324 4.07828 21.5 4.10339C22.8269 4.59919 23.1889 5.79102 23.1977 5.95378C23.2015 6.02492 23.1462 6.08575 23.0741 6.08956C23.0717 6.08975 23.0694 6.08975 23.067 6.08975Z" fill="#757575"/>
</svg>
 Labs, 2024
        </Text>
        <Flex color={'#70757A'} fontSize={{md:'1rem',base:'0.65rem'}} lineHeight={'27px'} letterSpacing={'0.5%'} fontWeight={'400'} p={2} minW={"100%"} bg={"#BDCFDE"} justifyContent="space-between">
          <Flex>
            <Link href="#" marginRight="4" >
              About
            </Link>
            <Link href="#" marginRight="4">
              Business
            </Link>
          </Flex>
          <Flex>
            <Link href="#" marginRight="4">
              Privacy
            </Link>
            <Link href="#">
              Terms
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
