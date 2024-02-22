import { Avatar, Typography } from "antd";
import { formatRelative } from "date-fns";
import styled from "styled-components";

interface Props {
  text: string;
  displayName: string;
  createdAt: Date;
  photoURL: string | null;
}

const WrapperStyled = styled.div`
  margin-bottom: 10px;

  .author {
    margin-left: 5px;
    font-weight: bold;
    color: #a7a7a7;
  }

  .content {
    margin-left: 30px;
  }

  .date {
    margin-left: 10px;
    font-size: 11px;
    color: #a7a7a7;
  }
`;

function formatDate(seconds: any) {
  let formattedDate = '';

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}

const Message = ({ text, displayName, createdAt, photoURL }: Props) => {
  return (
    <WrapperStyled>
      <div>
        <Avatar size='small' src={photoURL}>A</Avatar>
        <Typography.Text className='author'>{displayName}</Typography.Text>
        <Typography.Text className='date'>{formatDate(createdAt)}</Typography.Text>
      </div>
      <div>
        <Typography.Text className="content">{text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
};

export default Message
