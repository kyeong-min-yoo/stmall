package stmall.infra;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.naming.NameParser;
import javax.naming.NameParser;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;
import stmall.config.kafka.KafkaProcessor;
import stmall.domain.*;

//<<< Clean Arch / Inbound Adaptor
@Service
@Transactional
public class PolicyHandler {

    @Autowired
    OrderMgmtRepository orderMgmtRepository;

    @StreamListener(KafkaProcessor.INPUT)
    public void whatever(@Payload String eventString) {}

    @StreamListener(
        value = KafkaProcessor.INPUT,
        condition = "headers['type']=='DeliveryStarted'"
    )
    public void wheneverDeliveryStarted_UpdatStatus(
        @Payload DeliveryStarted deliveryStarted
    ) {
        DeliveryStarted event = deliveryStarted;
        System.out.println(
            "\n\n##### listener UpdatStatus : " + deliveryStarted + "\n\n"
        );

        // Sample Logic //
        OrderMgmt.updatStatus(event);
    }

    @StreamListener(
        value = KafkaProcessor.INPUT,
        condition = "headers['type']=='DeliveryModified'"
    )
    public void wheneverDeliveryModified_UpdatStatus(
        @Payload DeliveryModified deliveryModified
    ) {
        DeliveryModified event = deliveryModified;
        System.out.println(
            "\n\n##### listener UpdatStatus : " + deliveryModified + "\n\n"
        );

        // Sample Logic //
        OrderMgmt.updatStatus(event);
    }
}
//>>> Clean Arch / Inbound Adaptor
