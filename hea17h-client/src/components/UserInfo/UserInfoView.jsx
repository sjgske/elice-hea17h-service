import React from 'react';
import styled from 'styled-components';
import LabelWithInfo from './LabelWithInfo';

function UserInfoView({ dietInfo }) {
    return (
        <Root>
            <LabelWithInfo label="키(cm)" info={dietInfo.user.height} />
            <LabelWithInfo label="몸무게(kg)" info={dietInfo.user.weight} />
            <LabelWithInfo label="나이" info={dietInfo.user.age} />
            <LabelWithInfo label="성별" info={dietInfo.user.gender} />
            <LabelWithInfo
                label="BMI(kg/m²)"
                info={dietInfo.user.weight / (dietInfo.user.height / 100) ** 2}
            />
            <LabelWithInfo label="다이어트 목표" info={dietInfo.user.goal} />
            <LabelWithInfo label="활동 정도" info={dietInfo.user.activeLevel} />
            <LabelWithInfo
                label="RDI(kcal)"
                info={
                    (dietInfo.user.height - 100) *
                    0.9 *
                    dietInfo.user.activeLevel
                }
            />
        </Root>
    );
}

const Root = styled.div``;

export default UserInfoView;
