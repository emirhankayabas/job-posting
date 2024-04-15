import { useEffect } from "react";
import { useState } from "react";
import Input from "~/components/Form/Input";
import Select from "~/components/Form/Select";

export default function Step2() {
    const [positionTypes, setPositionTypes] = useState([]);

    useEffect(() => {
        setPositionTypes([
            "Tam zamanlı", "Yarı zamanlı", "Stajyer", "Uzaktan",
        ])
    }, []);

    return (
        <div className="flex flex-col gap-y-8">
            <Select name="position_types" label="İş türü*" options={positionTypes} />
            <Input name="position_salary" type="number" min="0" label="Maaş" inputMode="none" />
        </div>
    )
}
