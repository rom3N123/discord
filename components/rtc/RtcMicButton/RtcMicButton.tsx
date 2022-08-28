import { Tooltip } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { MicButton } from '~/components/buttons/MicButton';
import { rtcStore } from '~/store/rtc.store';

export const RtcMicButton = observer(() => {
    const onClick = () => {
        rtcStore.toggleIsMicEnabled();
    };

    const micButtonTooltip = rtcStore.isMicEnabled ? 'Выкл. микрофон' : 'Вкл. микрофон';

    return (
        <Tooltip hasArrow label={micButtonTooltip}>
            <MicButton
                aria-label="Toggle microphone"
                isEnabled={rtcStore.isMicEnabled}
                onClick={onClick}
            />
        </Tooltip>
    );
});
