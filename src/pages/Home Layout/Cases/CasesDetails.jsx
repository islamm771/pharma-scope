import React from 'react'
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CasesDetails = () => {
    const { caseId } = useParams();

    console.log(caseId)

    return (
        <div>
            <div className="heading text-center">
                <p className="mb-2">
                    <b>Latest Cases</b>
                </p>
                <h3>
                    Patient |<span> Simulations</span>
                </h3>
                <span>March 3, 2024 | By Pharma Scope</span>
            </div>

            <div className="container pt-5 pb-5">
                <div className="title-one mb-5">
                    <h3 className="heading-name">History of Present Illness</h3>
                    <p>
                        Mr. W., a 63-year-old man, presents to oncology for suspicion of
                        prostate cancer following abnormal DRE and PSA findings. One week
                        ago, he presented to his GP for an annual routine physical exam.
                        Physical examination revealed an enlarged and palpable prostate
                        during DRE, and laboratory studies showed an elevated PSA level of
                        125.1 ng/mL. Based on these findings and a high index of
                        suspicion for prostate cancer, Mr. W. was referred to oncology by
                        his GP for further evaluation and workup. He is asymptomatic and
                        denies any urinary symptoms or other complaints.
                    </p>
                </div>
                <div className="title-two mb-5">
                    <h3 className="heading-name">Family and Social History</h3>
                    <p>
                        Mr. W. has no family history of prostate cancer or other
                        malignancies. He is married, has two adult children that are in
                        good health and works as a metallurgist. Mr. W. does not smoke,
                        consumes one to two alcoholic beverages per week and does not use
                        illicit or recreational drugs.
                    </p>
                </div>
                <div className="title-three">
                    <h3 className="heading-name">Physical Examination Notes</h3>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <th>GENERAL</th>
                                <td>
                                    Well-appearing male in no acute distress; alert and oriented ×3
                                </td>
                            </tr>
                            <tr>
                                <th>HEART</th>
                                <td>
                                    Normal S1/S2; RRR; no murmurs
                                </td>
                            </tr>
                            <tr>
                                <th>LUNGS</th>
                                <td>
                                    Clear to auscultation bilaterally; normal resonance on percussion
                                </td>
                            </tr>
                            <tr>
                                <th>ABDOMEN</th>
                                <td>
                                    Normoactive bowel sounds; soft, nondistended and nontender with no
                                    palpable hepatomegaly, splenomegaly or masses
                                </td>
                            </tr>
                            <tr>
                                <th>EXTREMITIES</th>
                                <td>
                                    No swelling; no cyanosis; no lymphoedema
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    )
}

export default CasesDetails