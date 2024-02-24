import { Avatar, Button, Typography } from "antd";
import styled from "styled-components";
import { auth, db } from "../../firebase/config";
import { useContext, useEffect } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../Context/AuthProvider";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    margin-left: 5px;
  }
`;
const UserInfo = () => {
  // useEffect(()=> {
  //   onSnapshot(collection(db, "users"), (snapshot: any) => {
  //     const data = snapshot.docs.map((doc: any)=> ({
  //       ...doc.data(),
  //       id: doc.id
  //     }))
  //   });
  // }, [])

  const { user : { displayName, photoURL}} = useContext(AuthContext);

  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL} alt='Anh'>
          {photoURL ? '': displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className='username'>ABC</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
};

export default UserInfo;
