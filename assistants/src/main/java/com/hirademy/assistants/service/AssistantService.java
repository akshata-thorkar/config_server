package com.hirademy.assistants.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hirademy.assistants.entity.Assistant;
import com.hirademy.assistants.repository.AssistantRepository;
import com.hirademy.assistants.service.NotFoundException;

@Service
public class AssistantService {
	@Autowired
    private AssistantRepository assistantRepository;

    public Assistant createAssistant(Assistant assistant) {
        return assistantRepository.save(assistant);
    }

    public Assistant getAssistantById(Long id) {
        return assistantRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Assistant not found with id: " + id));
    }

    public Assistant updateAssistant(Long id, Assistant assistantDetails) {
        Assistant assistant = getAssistantById(id);
        assistant.setName(assistantDetails.getName());
        assistant.setMobile(assistantDetails.getMobile());
        assistant.setEmail(assistantDetails.getEmail());
        assistant.setSalary(assistantDetails.getSalary());
        assistant.setCity(assistantDetails.getCity());
        assistant.setCountry(assistantDetails.getCountry());
        assistant.setDepartment(assistantDetails.getDepartment());
        assistant.setRole(assistantDetails.getRole());
        return assistantRepository.save(assistant);
    }

    public void deleteAssistant(Long id) {
        Assistant assistant = getAssistantById(id);
        assistantRepository.delete(assistant);
    }
}
