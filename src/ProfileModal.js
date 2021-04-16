import React, { useRef } from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 450px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 90;
  border-radius: 10px;
  padding: 30px;
`;

const ProfileImage = styled.img`
  margin: 0 7.5%;
  width: 85%;
  height: 50%;
  object-fit: contain;
`;

const ProfileModal = ({ modalState, setModalState, detailProfile }) => {
  const modalRef = useRef();

  function closeModal(e) {
    if (modalRef.current === e.target) {
      setModalState(!modalState);
    }
  }
  return (
    <>
      {modalState ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper modalState={modalState}>
            <h1>{detailProfile.name}</h1>
            <ProfileImage
              src={
                process.env.PUBLIC_URL +
                "/" +
                detailProfile.profileImage +
                ".jpg"
              }
              alt=""
            />
            <p>{detailProfile.profileMessage}</p>
          </ModalWrapper>
        </Background>
      ) : null}
      ;
    </>
  );
};

export default ProfileModal;
