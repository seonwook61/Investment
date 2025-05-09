import { useState } from "react"

export default function UserInput() {
    // 1. 인풋 필드들을 각각의 상태로 관리하는 경우
    // 2. 인풋 필드들을 하나의 객체로 관리하는 경우
    const [userInput, setUserInput] = useState({
        InitialInvestment : 100000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput( (prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier] : newValue,
            }
        });
    }

    return ( <>
    <section id ="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    required
                    value={userInput.InitialInvestment} 
                    onChange={(event)=>
                        handleChange('InitialInvestment', event.target.value)
                        }
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                    type="number" 
                    required
                    value={userInput.annualInvestment} 
                    onChange={(event)=>
                        handleChange('annualInvestment', event.target.value)
                        }
                />
            </p>
        </div>

        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input 
                    type="number" 
                    required
                    value={userInput.expectedReturn} 
                    onChange={(event)=>
                        handleChange('expectedReturn', event.target.value)
                        }
                />
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type="number" 
                    required
                    value={userInput.duration} 
                    onChange={(event)=>
                        handleChange('duration', event.target.value)
                        }
                />
            </p>
        </div>
    </section>

        </>
    )
}