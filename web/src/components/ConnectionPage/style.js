import styled from 'styled-components';

export const ConnectionWrapper=styled.main`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 15% 15%;
`;
export const ConditionalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: none;
`;
export const LoadingView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: none;
`;
export const LoadingGif = styled.img`
  max-width: 364px;
`;
export const AlertDialog = styled.p`
  text-align: justify;
`;
export const ImageIcon = styled.img`
  height: 72px;
  width:96px;
`;
export const DeviceName = styled.span`

`;
export const DeviceButton = styled.button`
  height:78px;
  width:296px;
  font-size: small;
  background-color: #eeeeee;
  border: 1px solid #bbbbbb;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: gray;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px 0px 0px 0px;
  cursor: pointer;
  &:hover{
    background: #cccccc;
    outline: none;
  };
  &:active{
    background: #cccccc;
    outline: none;
  };
  &:focus{
    background-color: #dbffe5;
    outline: none;
  };
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;
export const SearchButton = styled.button`
  height: 78px;
  width:296px;
  font-size: x-small;
  background-color: #f0f0f0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: none;
  color: solid black;
  padding: 0;
  text-align: center;
  text-decoration: underline;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  &:hover{
    background: #cccccc;
    outline: none;
  };
  &:active{
    background: #cccccc;
    outline: none;
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
  &:focus{
    outline: none;
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;
export const CheckDialog = styled.span`
  text-align: center;
  font-size: medium;
`;
export const ConfirmButton = styled.button` 
  cursor: pointer;
  color: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 40px;
  border: none;
  border-radius: 32px;
  line-height: 1.5;
  background-color: #257D23;
  margin: 10px 0px;
  &:hover {
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
  &:active {
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
  &:focus {
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5);
    outline: none;
  };
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;
export const ReconfirmButton = styled.button` 
  height: auto;
  width:auto;
  font-size: small;
  border: none;
  background: none;
  color: #b00000;
  padding: 0;
  text-align: center;
  text-decoration: underline;
  display: inline-block;
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
  &:hover{
    background: #eeeeee;
    outline: none;
  };
  &:active{
    background: #cccccc;
    outline: none;
  };
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;
export const DisconnectButton = styled.button` 
  height: auto;
  width:auto;
  font-size: small;
  border: none;
  background: none;
  color: #b00000;
  padding: 0;
  text-align: center;
  text-decoration: underline;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  &:hover{
    background: #eeeeee;
    outline: none;
  };
  &:active{
    background: #cccccc;
    outline: none;
  };
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;
export const SuccessDialog = styled.h1`

`;
export const StatusDialog = styled.span`
  color: #257D23;
  font-size: x-large;
`;
export const SloganText = styled.p`
  font-size: medium;
  text-align: center;
  position: fixed;
  left: 20vw;
  right: 20vw;
  bottom: 0px;
`;
export const HighlightText = styled.span`
  color: #b00000;
`;
export const HighlightIcon = styled.span`
  font-size: xx-large;
  color: ${props =>
   props.children.props.conditionalColor ? '#257D23':'#b00000'
  };
`;
export const FireflyIcon = styled.div`
  position: relative;
`;