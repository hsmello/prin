import React from 'react';
import Panel from '../../Components/Panel';
import FAQArray from './FAQArray';
import './FAQ.css';

export default function FAQ() {

    return (
        <div className="">
            <div className="faqTitle">
                Perguntas Frequentes
            </div>
            <div className="faqQuestions">
                {FAQArray.map((question, index) => {
                    return (
                        <Panel 
                            title={question.title}
                            subtitle={question.subtitle}
                            answer={question.answer}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}