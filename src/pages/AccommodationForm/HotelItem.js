import React, { useState } from "react";
import Modal from 'react-modal';

import { Item, modalStyle, ModalContainer, PriceAndButtons } from './AccommodationFormStyle';

export default function HotelItem({ hotel }) {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Item
                backgroundImg={hotel.picUrl}
                onMouseOver={() => setIsMouseOver(true)}
                onMouseOut={() => setIsMouseOver(false)}
                isMouseOver={isMouseOver}
                onClick={() => setIsModalOpen(true)}
            >
                <div>
                    <span>{hotel.name}</span>
                </div>
            </Item>
    
            <Modal style={modalStyle} isOpen={isModalOpen}>
                <ModalContainer>
                    <img src={hotel.picUrl} />

                    <div>
                        <div>
                            <span>{hotel.name}</span>
                            <span>{hotel.description}</span>
                        </div>
                        <PriceAndButtons>
                            <div>
                                <span>{hotel.price}</span>                                
                            </div>
                            
                            <div>
                                <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                                <button>Confirmar</button>
                            </div>
                        </PriceAndButtons>
                    </div>
                </ModalContainer>
            </Modal>
        </>
    );
}