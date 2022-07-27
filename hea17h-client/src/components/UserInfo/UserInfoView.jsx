import React from 'react';
import LabelWithInfo from './LabelWithInfo';

function UserInfoView({ dietInfo }) {
    const { user } = dietInfo;
    const { height, weight, age, gender, goal, activeLevel } = user;

    return (
        <div>
            <LabelWithInfo label="키(cm)" info={height} />
            <LabelWithInfo label="몸무게(kg)" info={weight} />
            <LabelWithInfo label="나이" info={age} />
            <LabelWithInfo label="성별" info={gender} />
            <LabelWithInfo
                label="BMI(kg/m²)"
                info={(weight / (height / 100) ** 2).toFixed(2)}
            />
            <LabelWithInfo label="다이어트 목표" info={goal} />
            <LabelWithInfo label="활동 정도" info={activeLevel} />
            <LabelWithInfo
                label="RDI(kcal)"
                info={((height - 100) * 0.9 * activeLevel).toFixed(2)}
            />
        </div>
    );
}

export default UserInfoView;
