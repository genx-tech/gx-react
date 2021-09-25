import React from 'react';
import { TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { Icon } from 'galio-framework';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImagesSwiper = ({
    urls,
    index,
    open,
    toggleSwiper,
    closeIcon,
    ...props
}) => {
    const images = urls.map((url) => ({ url: url }));
    const onClose = () => toggleSwiper(false);

    const _renderHeader = (props) => (
        <TouchableOpacity
            style={{
                position: 'absolute',
                top: 48,
                right: 20,
                height: 46,
                width: 46,
                zIndex: 999,
            }}
            onPress={onClose}
        >
            <Icon family="Ionicons" name="close" size={30} color="white" />
        </TouchableOpacity>
    );
    return (
        <Modal
            visible={open}
            transparent={true}
            supportedOrientations={[
                'portrait',
                'portrait-upside-down',
                'landscape',
                'landscape-left',
                'landscape-right',
            ]}
            style={{ width: '100%', height: '100%' }}
        >
            <ImageViewer
                imageUrls={images}
                onSwipeDown={onClose}
                useNativeDriver
                loadingRender={() => <ActivityIndicator color={'white'} />}
                renderHeader={_renderHeader}
                onSave={false}
                enableSwipeDown
                enablePreload
                index={index}
                saveToLocalByLongPress={false}
                {...props}
            />
        </Modal>
    );
};

export default ImagesSwiper;
