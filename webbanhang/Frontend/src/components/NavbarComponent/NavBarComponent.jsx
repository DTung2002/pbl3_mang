import { Checkbox, Col, Rate, Row } from 'antd'
import React, { useState } from 'react';
import {  WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
// import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux'

const NavBarComponent = (handleChange) => {
        const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}onChange={handleChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ dispaly: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span> {`tu ${option}  sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                })
            default:
                return {}
        }
    }

    return (
        <div>
            <h2>Tìm kiếm mặc định</h2>
            <h3>Mức giá</h3>
            <WrapperLableText>

            {renderContent('checkbox', [
          { value: '100.000', label: 'Dưới 100.000' },
          { value: ['100.000', '500.000'], label: '100.000 đến 500.000' },
          { value: '1000.000', label: 'trên 500.000' },
        ], handleChange)}
</WrapperLableText>
<h3>Đánh giá</h3>

            <WrapperLableText>
                {/* onClick={handleChange} */}
                {renderContent('star', [1, 2, 3, 4, 5])}
            </WrapperLableText>

        </div>
    )
}

export default NavBarComponent