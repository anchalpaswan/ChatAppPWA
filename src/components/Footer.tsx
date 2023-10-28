import { GoPaperclip, GoPaperAirplane } from 'react-icons/go'
import { Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    Button , Container, Input, Box , Stack} from '@chakra-ui/react'
function Footer() {
    return ( 
        
        <Box>
          <Stack direction="row" alignItems={'center'} spacing={3} p={8}>
            <Container
              backgroundColor={'white'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Input
                fontSize="14px"
                className="font"
                color="black"
                _placeholder={{ color: '#C9C9C9' }}
                placeholder="Reply to @Rohit Yadav"
                variant="unstyled"
                size="md"
              />

              <Popover>
                <PopoverTrigger>
                  <Button colorScheme={'#fff'}>
                    <GoPaperclip fontSize="22px" color={'black'} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={100}>
                  <PopoverArrow bg={'green'} />
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent={'center'}
                    alignItems="center"
                    backgroundColor="green"
                    borderRadius={99}
                  >
                    <Box backgroundColor="green" p={1} borderRadius="90%">
                      <svg
                        width="20"
                        height="19"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 19"
                      >
                        <rect width="20" height="24" rx="4" fill="green" />
                        <path
                          d="M1.66667 6.41814C1.66667 5.17468 2.67469 4.16666 3.91815 4.16666C4.56422 4.16666 5.13781 3.75324 5.34211 3.14032L5.41667 2.91666C5.45183 2.81118 5.46941 2.75844 5.48821 2.71166C5.72837 2.11426 6.29116 1.70863 6.93385 1.6697C6.98418 1.66666 7.03977 1.66666 7.15095 1.66666H12.8491C12.9602 1.66666 13.0158 1.66666 13.0662 1.6697C13.7088 1.70863 14.2716 2.11426 14.5118 2.71166C14.5306 2.75844 14.5482 2.81118 14.5833 2.91666L14.6579 3.14032C14.8622 3.75324 15.4358 4.16666 16.0819 4.16666C17.3253 4.16666 18.3333 5.17468 18.3333 6.41814V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66667C4.26654 17.5 3.56647 17.5 3.03169 17.2275C2.56129 16.9878 2.17883 16.6054 1.93915 16.135C1.66667 15.6002 1.66667 14.9001 1.66667 13.5V6.41814Z M10 13.75C12.0711 13.75 13.75 12.0711 13.75 9.99999C13.75 7.92892 12.0711 6.24999 10 6.24999C7.92893 6.24999 6.25 7.92892 6.25 9.99999C6.25 12.0711 7.92893 13.75 10 13.75Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                        />
                      </svg>
                    </Box>
                    <Box backgroundColor="green" p={1} borderRadius="50%">
                      <svg
                        width="18"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 12"
                      >
                        <rect width="18" height="12" rx="4" fill="green" />
                        <path
                          d="M17 2.42857L11.9091 6L17 9.57143V2.42857Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                        />
                        <path
                          d="M10.4545 1H2.45455C1.65122 1 1 1.63959 1 2.42857V9.57143C1 10.3604 1.65122 11 2.45455 11H10.4545C11.2579 11 11.9091 10.3604 11.9091 9.57143V2.42857C11.9091 1.63959 11.2579 1 10.4545 1Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                        />
                      </svg>
                    </Box>
                    <Box backgroundColor="green" p={1} borderRadius="50%">
                      <svg
                        width="17"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 20"
                      >
                        <rect width="17" height="20" fill="green" />
                        <path
                          d="M14.6667 10.4167V5.66666C14.6667 4.26653 14.6667 3.56646 14.3942 3.03168C14.1545 2.56128 13.7721 2.17882 13.3016 1.93914C12.7669 1.66666 12.0668 1.66666 10.6667 1.66666H5.33334C3.9332 1.66666 3.23314 1.66666 2.69836 1.93914C2.22795 2.17882 1.8455 2.56128 1.60582 3.03168C1.33334 3.56646 1.33334 4.26653 1.33334 5.66666V14.3333C1.33334 15.7335 1.33334 16.4335 1.60582 16.9683C1.8455 17.4387 2.22795 17.8212 2.69836 18.0608C3.23314 18.3333 3.93317 18.3333 5.33322 18.3333H8.41667M9.66667 9.16666H4.66667M6.33334 12.5H4.66667M11.3333 5.83332H4.66667M10.5 15.8333L13 18.3333M13 18.3333L15.5 15.8333M13 18.3333V13.3333"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                        />
                      </svg>
                    </Box>
                  </Box>
                </PopoverContent>
              </Popover>

              <GoPaperAirplane fontSize="22px" />
            </Container>
          </Stack>
        </Box>
     );
}

export default Footer;