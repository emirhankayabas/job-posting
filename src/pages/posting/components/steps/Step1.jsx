import { useState, useEffect } from "react";
import Input from "~/components/Form/Input";
import Select from "~/components/Form/Select";
import cityData from '~/data/cities.json';

export default function Step1() {
    const [positionCount, setPositionCount] = useState([]);
    const cityDataArr = Object.keys(cityData).map((key) => cityData[key]);

    useEffect(() => {
        for (let index = 1; index <= 10; index++) {
            setPositionCount((prev) => [...prev, index])
        }

    }, []);


    return (
        <div className="flex flex-col gap-y-8">
            <Input name="position_name" label="Pozisyon adı*" />
            <Select name="position_count" label="İşe alınacak kişi sayısı*" options={positionCount} />
            <Select name="position_location" label="İş ilanının nerede görüntülenmesini istersiniz?*" options={cityDataArr} />
        </div>
    )
}
