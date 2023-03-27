import styled from "styled-components";

const WarningText = styled.h2`
  width: 100%;
  text-align: center;
  color: red;
`;

const ERROR_LIST: { [key: string]: string } = {
  "400":
    "An invalid parameter was passed, this includes even 'high level' parameters like key or site.",
  "401":
    "A method that requires an access token (obtained via authentication) was called without one.",
  "402": "An invalid access token was passed to a method.",
  "403":
    "A method which requires certain permissions was called with an access token that lacks those permissions.",
  "404":
    "An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.",
  "405":
    "A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.",
  "406":
    "An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.",
  "407":
    "A write operation was rejected, see the returned error_message for more details.",
  "409": "A request identified by a request_id has already been run.",
  "500": "An unexpected error occurred in the API and has been logged.",
  "502":
    "An application has violated part of the rate limiting contract, so the request was terminated.",
  "503":
    "Some or all of the API is unavailable. Applications should back off on requests to the method invoked.",
};

const ErrorText = ({ errorId }: { errorId: string }) => {
  return (
    <WarningText>
      {ERROR_LIST[errorId] || "Unknown error id! Something went wrong!"}
    </WarningText>
  );
};

export default ErrorText;
