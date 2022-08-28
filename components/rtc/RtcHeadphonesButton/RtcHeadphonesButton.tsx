import React from 'react';
import { observer } from 'mobx-react-lite';
import { HeadphonesButton } from '~/components/buttons/HeadphonesButton';
import { rtcStore } from '~/store/rtc.store';
import { Tooltip } from '@chakra-ui/react';

export const RtcHeadphonesButton = observer(() => {
    const onClick = () => {
        rtcStore.toggleIsHeadphonesEnabled();
    };

    const headphonesButtonTooltip = rtcStore.isHeadphonesEnabled ? 'Выкл. звук' : 'Вкл. звук';

    return (
        <Tooltip hasArrow label={headphonesButtonTooltip}>
            <HeadphonesButton
                aria-label="Toggle headphones sound"
                isEnabled={rtcStore.isHeadphonesEnabled}
                onClick={onClick}
            />
        </Tooltip>
    );
});
